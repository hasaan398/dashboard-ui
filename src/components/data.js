import Finance from "../pages/finance/finance";

export const emails = [
  { 
    id: 1, 
    sender: "Tony Soap",
    subject: "Daily Meeting Schedule with Stakeholders",
    preview: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    time: "Today",
    category: "inbox",
    important: true
  },
  { 
    id: 2, 
    sender: "Samantha",
    subject: "Weekly Server Maintenance",
    preview: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    time: "Today",
    category: "inbox",
    important: false
  },
  { 
    id: 3, 
    sender: "Design Team",
    subject: "Design Newsletter",
    preview: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    time: "Today",
    category: "inbox",
    important: false
  },
  { 
    id: 4, 
    sender: "Bot",
    subject: "Your Daily Booster",
    preview: "Lorem ipsum dolor sit amet consectetur adipiscing elit...",
    time: "Today",
    category: "inbox",
    important: false
  }
];

export const contacts = [
  { id: 1, name: "Johnny Ahmad", role: "Central Usability Officer", online: true },
  { id: 2, name: "Samantha William", role: "Central Usability Officer", online: true },
  { id: 3, name: "Nadia Adja", role: "Central Usability Officer", online: false },
  { id: 4, name: "Tony Soap", role: "Central Usability Officer", online: true },
  { id: 5, name: "Karen Hope", role: "Central Usability Officer", online: false },
  { id: 6, name: "Jack Gallen", role: "Central Usability Officer", online: true },
  { id: 7, name: "Jordan Nico", role: "Central Usability Officer", online: false },
  { id: 8, name: "John Doe", role: "Central Usability Officer", online: true },
  { id: 9, name: "Vega D.", role: "Central Usability Officer", online: false },
  { id: 10, name: "Col J. Lays", role: "Central Usability Officer", online: true },
  { id: 11, name: "Vergo Vergana", role: "Central Usability Officer", online: false },
  { id: 12, name: "Angelina Crispy", role: "Central Usability Officer", online: true }
];

export const invoices = [
  { id: "#123456", date: "21/03/2021", amount: "$145.00", dueDate: "21/04/2021", status: "Paid" },
  { id: "#123458", date: "21/03/2021", amount: "$45.00", dueDate: "21/04/2021", status: "Unpaid" },
  { id: "#123459", date: "21/03/2021", amount: "$75.00", dueDate: "21/04/2021", status: "Paid" },
  { id: "#123460", date: "21/03/2021", amount: "$345.00", dueDate: "21/04/2021", status: "Unpaid" },
  { id: "#123461", date: "21/03/2021", amount: "$454.00", dueDate: "21/04/2021", status: "Paid" }
];
// =================Finance page======================
export const transactions = [
  { id: 1, name: "To Heaven Studio", category: "Salary", date: "12 June, 2021", amount: "-$650,00", checked: true },
  { id: 2, name: "Monthly Subcription", category: "Payment", date: "12 June, 2021", amount: "-$650,00", checked: true },
  { id: 3, name: "Groceries", category: "Payment", date: "12 June, 2021", amount: "-$650,00", checked: true },
  { id: 4, name: "Icon Studio", category: "Salary", date: "12 June, 2021", amount: "-$650,00", checked: true }
];

export const savings = [
  { id: 1, name: "Buying House", current: 16500, total: 10000, color: "#4F45B6" },
  { id: 2, name: "Gaming Setup", current: 7000, total: 10000, color: "#F8C140" }
];

export const tickets = [
  { id: 1, event: "Music Event", date: "12 June, 2021", email: "samantha@email.com", status: "Pending", file: "ticket001.pdf", amount: "-$60,00" },
  { id: 2, event: "Anime Music Event", date: "12 June, 2021", email: "soap@email.com", status: "Completed", file: "ticket002.pdf", amount: "-$750,00" },
  { id: 3, event: "Home Decor Event", date: "12 June, 2021", email: "azhmad@email.com", status: "Pending", file: "ticket003.pdf", amount: "-$150,00" },
  { id: 4, event: "Food Festival", date: "12 June, 2021", email: "hope@email.com", status: "Completed", file: "ticket004.pdf", amount: "-$50,00" },
  { id: 5, event: "Tech Seminar", date: "12 June, 2021", email: "cole@email.com", status: "Completed", file: "ticket005.pdf", amount: "-$10,00" },
  { id: 6, event: "Food Festival", date: "12 June, 2021", email: "john@email.com", status: "Pending", file: "ticket006.pdf", amount: "-$650,00" }
];

export const todayEvents = [
  { id: 1, time: "09:00 - 10:00 AM", title: "Web Design Webinar", desc: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum.", color: "#4F45B6" },
  { id: 2, time: "09:00 - 10:00 AM", title: "Food Festival", desc: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum.", color: "#F8C140" },
  { id: 3, time: "09:00 - 10:00 AM", title: "Tech Seminar", desc: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum.", color: "#FF6B6B" },
  { id: 4, time: "09:00 - 10:00 AM", title: "Music Event", desc: "Sed dignissaf lorem reprehenderit. Lorem ipsum dolor interdum.", color: "#4F45B6" }
];