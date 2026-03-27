// src/utils/storage.js

// My centralized database key for the Hex Softwares requirement. 
// Defining this once at the top prevents typo bugs across my application.
const DB_KEY = 'kanchalu_client_database';

/**
 * Core Data Engine: Saves a new client proposal to the browser's local database.
 * * NOTE TO SELF: When I eventually upgrade Kanchalu.Dev to a real backend (like Django), 
 * I only need to swap out the logic inside this specific function. 
 * Because I separated this from my UI components, the rest of my app will remain untouched!
 */
export const saveClientRequest = (clientData) => {
  try {
    // 1. Retrieve the existing database array, or start fresh if it's the very first client
    const existingClients = JSON.parse(localStorage.getItem(DB_KEY)) || [];
    
    // 2. Structure my new client record with strict, auto-generated metadata
    const newRecord = {
      ...clientData,
      id: Date.now(), // Using timestamp as a unique ID for perfect sorting
      date: new Date().toLocaleString(),
      status: 'Pending Review' // Default status for my future admin dashboard
    };

    // 3. Inject the new record and serialize it back into Local Storage
    existingClients.push(newRecord);
    localStorage.setItem(DB_KEY, JSON.stringify(existingClients));
    
    // Return the formatted record just in case my UI needs to display a success confirmation
    return newRecord; 
    
  } catch (error) {
    // High-standard defensive programming: Catch any storage quota or JSON parsing errors
    console.error("Kanchalu.Dev System Error: Failed to save client request.", error);
    return null; 
  }
};

/**
 * Retrieval Engine: Fetches all client proposals for my Admin Dashboard.
 * * NOTE TO SELF: This automatically sorts the data so my newest clients always appear at the top of the table.
 */
export const getAllClientRequests = () => {
  try {
    // Fetch the raw data from the browser
    const existingClients = JSON.parse(localStorage.getItem(DB_KEY)) || [];
    
    // Sort descending by ID (since my ID is a timestamp, a higher number = a more recent submission)
    return existingClients.sort((a, b) => b.id - a.id);
    
  } catch (error) {
    console.error("Kanchalu.Dev System Error: Failed to retrieve database.", error);
    // Always return a safe empty array if something breaks, so my dashboard UI never crashes
    return []; 
  }
};