import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export class Datastore {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    admin.initializeApp(functions.config().firebase);
    const firestore = admin.firestore();
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);
    this.db = firestore;
  }

  checkIsLoggedId(logId: number, callback: (isLogged: boolean) => any) {
    const docRef = this.db.collection("log").doc("me");
    docRef
      .get()
      .then(doc => {
        const loggedLogId = doc.get("last_log_id");
        console.log("logId", logId, loggedLogId);
        if (logId === loggedLogId) {
          callback(true);
        } else {
          callback(false);
        }
      })
      .catch(err => {
        console.log("Error getting documents", err);
        callback(true);
      });
  }

  writeLogId(logId: number) {
    const docRef = this.db.collection("log").doc("me");
    docRef
      .set({
        last_log_id: logId
      })
      .catch(err => {
        console.log("Error writting documents", err);
      });
  }

  writeToken(token: string, refreshToken: string) {
    const docRef = this.db.collection("secrets").doc("me");
    docRef
      .set({
        token: token,
        refreshToken: refreshToken
      })
      .catch(err => {
        console.log("Error writting documents", err);
      });
  }

  readToken(
    callback: ((error: Error, token: string, refreshToken: string) => any)
  ) {
    const docRef = this.db.collection("secrets").doc("me");
    docRef
      .get()
      .then(doc => {
        const token = doc.get("token");
        const refreshToken = doc.get("refreshToken");
        if (token !== null && refreshToken !== null) {
          callback(null, token, refreshToken);
        } else {
          callback(new Error(), null, null);
        }
      })
      .catch(err => {
        callback(new Error(), null, null);
      });
  }
}
