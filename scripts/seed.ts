import { db } from '../src/config/firebase.config'
import { getFirestore, writeBatch, collection, doc, query, where, getDocs } from "firebase/firestore"; 
import { initialProducts} from '../src/data/initial-products'
import { IProducts } from '../src/types/productsType';

const seedProduct = async () => {
    const batch = writeBatch(db);
    const colRef = collection(db, "products");
    const uniqueRecords: IProducts[] = [];

    for (const product of initialProducts) {
        // Query to check for duplicates
        const q = query(colRef, where("id", "==", product.id));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            uniqueRecords.push(product); // Add to batch if not a duplicate
        } else {
            console.log(`Duplicate record skipped: ${JSON.stringify(product.name)}`);
        }
    }

    // Add unique records to the batch
    uniqueRecords.forEach(product => {
        const docRef = doc(colRef, product.id); // Use auto-generated ID if no `record.id`
        batch.set(docRef, product);
    });

    try {
        if (uniqueRecords.length > 0) {
            await batch.commit();
            console.log(`${uniqueRecords.length} records inserted successfully.`);
        } else {
            console.log("No new records to insert.");
        }
    } catch (error) {
        console.error("Error inserting records:", error);
    }

}

const seed = async () => {
    await seedProduct()
}

async function main() {
    try {
        console.log('Seeding the database')
        await seed()
        console.log('Database seeded successfully')
    } catch (error) {
        console.error('An error occurred while seeding the database', error)
        process.exit(1)
    }
}

main()
