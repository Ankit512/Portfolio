import { type Contact, type InsertContact } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, Contact>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async createContactMessage(insertMessage: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const message: Contact = { id, ...insertMessage };
    this.messages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
