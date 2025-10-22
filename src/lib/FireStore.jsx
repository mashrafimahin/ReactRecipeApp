// hooks
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import app from "./Firebase";

// Instences
const db = getFirestore(app);

// create user data
export const createUserData = async (uid, name, email, password) => {
  try {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: name,
      email: email,
      password: password,
      phone: "",
      address: "",
      createDate: new Date(),
    });
  } catch (error) {
    alert("Having some issues to save your data.");
    console.log("Server request failed" + error);
  }
};

// fetch user data
export const fetchUserData = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    // checkpoint
    if (docSnap.exists()) return docSnap.data();
  } catch (error) {
    console.log("Error found..!" + error);
  }
};
