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

  existsLoggedId(logId: number) {
    const docRef = this.db.collection("log").doc("me");
    return new Promise<boolean>((resolve, reject) => {
      return docRef
        .get()
        .then(doc => {
          const loggedLogId = doc.get("last_log_id");
          resolve(logId === loggedLogId);
        })
        .catch(err => {
          console.log("Error getting documents", err);
          reject(err);
        });
    });
  }

  writeLogId(logId: number) {
    const docRef = this.db.collection("log").doc("me");
    return new Promise<boolean>((resolve, reject) => {
      return docRef
        .set({ last_log_id: logId })
        .then(res => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  writeToken(token: string, refreshToken: string) {
    const docRef = this.db.collection("secrets").doc("me");
    return new Promise<boolean>((resolve, reject) => {
      docRef
        .set({ token: token, refreshToken: refreshToken })
        .then(() => resolve(true))
        .catch(err => reject(err));
    });
  }

  readToken() {
    const docRef = this.db.collection("secrets").doc("me");
    return new Promise<[string, string]>((resolve, reject) => {
      return docRef
        .get()
        .then(doc => {
          const token = doc.get("token");
          const refreshToken = doc.get("refreshToken");
          if (token !== null && refreshToken !== null) {
            resolve([token, refreshToken]);
          } else {
            reject();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
