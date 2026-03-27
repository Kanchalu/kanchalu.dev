// src/utils/storage.test.js
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { saveClientRequest, getAllClientRequests } from './storage';

/**
 * KANCHALU.DEV TEST SUITE
 * Purpose: To verify that our LocalStorage database logic is bulletproof
 * for the Hex Softwares Internship requirements.
 */

// 1. MOCK LOCALSTORAGE
// Since we are running in Node.js (terminal), not a browser, 
// we create a "fake" localStorage to test our logic.
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
    removeItem: (key) => { delete store[key]; }
  };
})();

// Assign the mock to the global window object
vi.stubGlobal('localStorage', localStorageMock);

describe('Storage Utility Engine', () => {
  
  // Clear the database before every single test to ensure a "Clean Slate"
  beforeEach(() => {
    localStorage.clear();
  });

  it('should successfully save a client proposal with an ID and Status', () => {
    const mockData = {
      fullName: "Given Kanchalu",
      email: "kanchalugiven@gmail.com",
      projectType: "Full-Stack Development",
      message: "Testing the Kanchalu.Dev System"
    };

    const result = saveClientRequest(mockData);

    // Assertions: Proving the code worked
    expect(result.fullName).toBe("Given Kanchalu");
    expect(result.status).toBe("Pending Review"); // Proves our default status logic
    expect(result.id).toBeDefined(); // Proves we are generating unique IDs
  });

  it('should retrieve all clients in the correct order (Newest First)', async () => {
    // Save two clients
    saveClientRequest({ fullName: "Older Proposal" });
    
    // Tiny delay to ensure unique timestamps
    await new Promise(r => setTimeout(r, 10)); 
    
    saveClientRequest({ fullName: "Newest Proposal" });

    const allProposals = getAllClientRequests();

    // The first item in the array should be the most recent one
    expect(allProposals.length).toBe(2);
    expect(allProposals[0].fullName).toBe("Newest Proposal");
  });

  it('should return an empty array if the database is empty', () => {
    const data = getAllClientRequests();
    expect(data).toEqual([]);
  });
});