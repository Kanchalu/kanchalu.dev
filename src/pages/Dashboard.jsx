import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaChartPie, FaInbox, FaCog, FaArrowLeft, FaPlus, 
  FaTrash, FaEye, FaReply, FaWallet, FaExternalLinkAlt 
} from 'react-icons/fa';

// My centralized database engine
import { getAllClientRequests } from '../utils/storage';
import ContactForm from '../components/ui/ContactForm';

const Dashboard = () => {
  const [clients, setClients] = useState([]);
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [viewingMessage, setViewingMessage] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [activeView, setActiveView] = useState('proposals');

  // 1. My standard data loader (Hex Softwares Requirement)
  const loadData = () => {
    const data = getAllClientRequests();
    setClients(data);
  };

  useEffect(() => {
    loadData();
    window.addEventListener('storage', loadData);
    return () => window.removeEventListener('storage', loadData);
  }, []);

  // 2. My Status Update Logic (Zambian Standard Approval)
  const toggleStatus = (id) => {
    const updated = clients.map(client => {
      if (client.id === id) {
        return { 
          ...client, 
          status: client.status === 'Pending Review' ? 'Project Approved' : 'Pending Review' 
        };
      }
      return client;
    });
    localStorage.setItem('kanchalu_client_database', JSON.stringify(updated));
    setClients(updated);
  };

  // 3. My Reply Persistence Logic (Saves the conversation thread)
  const handleSendReply = () => {
    if (!viewingMessage) return;
    const updated = clients.map(client => {
      if (client.id === viewingMessage.id) {
        return { ...client, adminReply: replyText, status: 'Replied' };
      }
      return client;
    });
    localStorage.setItem('kanchalu_client_database', JSON.stringify(updated));
    setClients(updated);
    setViewingMessage(null);
    setReplyText("");
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this proposal?")) {
        const updated = clients.filter(c => c.id !== id);
        localStorage.setItem('kanchalu_client_database', JSON.stringify(updated));
        loadData();
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-inter overflow-hidden">
      
      {/* --- SIDEBAR: MATCHED TO HERO SECTION COLOR (#0F172A) --- */}
      <aside className="w-64 bg-[#0F172A] flex flex-col hidden lg:flex shadow-2xl z-10">
        <div className="h-24 flex items-center px-8 border-b border-white/10">
          <span className="text-xl font-bold font-poppins text-white tracking-wide">
            Kanchalu<span className="text-[#3B82F6]">.Dev</span>
          </span>
        </div>

        <nav className="flex-1 px-4 py-8 flex flex-col gap-2">
          <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] px-4 mb-4">Admin Console</div>
          
          <button 
            onClick={() => setActiveView('proposals')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${activeView === 'proposals' ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-500/20' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}`}
          >
            <FaInbox className="text-lg" /> Proposals
          </button>
          
          <button 
            onClick={() => setActiveView('overview')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${activeView === 'overview' ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-500/20' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}`}
          >
            <FaChartPie className="text-lg" /> Overview
          </button>

          <button 
            onClick={() => setActiveView('payments')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${activeView === 'payments' ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-500/20' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}`}
          >
            <FaWallet className="text-lg" /> Payments
          </button>

          <button 
            onClick={() => setActiveView('settings')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${activeView === 'settings' ? 'bg-[#3B82F6] text-white shadow-lg shadow-blue-500/20' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}`}
          >
            <FaCog className="text-lg" /> Settings
          </button>

          <button 
            onClick={() => setShowAdminForm(true)} 
            className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-4 bg-white text-[#0F172A] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#3B82F6] hover:text-white transition-all shadow-xl"
          >
            <FaPlus /> Create Proposal
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/" className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white hover:bg-red-500 transition-all rounded-xl font-bold text-xs uppercase tracking-widest">
            <FaArrowLeft /> Log Out
          </Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 overflow-y-auto relative bg-[#F8FAFC]">
        <div className="p-6 lg:p-12 max-w-[1200px] mx-auto">
          
          <header className="mb-10 flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black font-poppins text-[#0F172A] capitalize">{activeView}</h1>
              <p className="text-[#64748B] mt-2 text-sm font-medium">Monitoring Kanchalu Technologies System Traffic.</p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.2em]">System Time (CAT)</div>
              <div className="text-xl font-bold text-[#0F172A]">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {activeView === 'proposals' && (
              <motion.div key="proposals" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="bg-white rounded-[2rem] border border-[#E2E8F0] shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-[#F1F5F9] text-[#475569] uppercase tracking-wider text-[11px] font-bold border-b border-[#E2E8F0]">
                    <tr>
                      <th className="px-8 py-5">Client Identity</th>
                      <th className="px-8 py-5">Service Type</th>
                      <th className="px-8 py-5">Status</th>
                      <th className="px-8 py-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0]">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-8 py-5">
                          <div className="font-bold text-[#0F172A]">{client.fullName}</div>
                          <div className="text-[10px] text-[#94A3B8]">{client.email}</div>
                        </td>
                        <td className="px-8 py-5 text-[#64748B] font-medium">{client.projectType}</td>
                        <td className="px-8 py-5">
                          <button 
                            onClick={() => toggleStatus(client.id)}
                            className={`px-3 py-1 rounded-lg text-[10px] font-black border uppercase transition-all ${client.status === 'Pending Review' ? 'bg-orange-50 text-orange-600 border-orange-100 hover:bg-orange-600 hover:text-white' : 'bg-green-50 text-green-600 border-green-100 hover:bg-green-600 hover:text-white'}`}
                          >
                            {client.status}
                          </button>
                        </td>
                        <td className="px-8 py-5 text-right flex justify-end gap-2">
                          <button onClick={() => { setViewingMessage(client); setReplyText(client.adminReply || ""); }} className="w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all"><FaEye /></button>
                          <button onClick={() => window.open(`mailto:${client.email}`)} className="w-9 h-9 flex items-center justify-center bg-slate-50 text-slate-500 rounded-xl hover:bg-[#3B82F6] hover:text-white transition-all"><FaExternalLinkAlt /></button>
                          <button onClick={() => handleDelete(client.id)} className="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><FaTrash /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeView === 'payments' && (
              <motion.div key="payments" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="bg-white p-8 rounded-[2rem] border border-[#E2E8F0] shadow-sm max-w-md">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-xl"><FaWallet /></div>
                    <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full uppercase">ZMW Balance</span>
                  </div>
                  <h3 className="text-slate-400 font-bold text-sm">Revenue Realized</h3>
                  <div className="text-3xl font-black text-[#0F172A] mt-1">K 12,450.00</div>
                  <button className="mt-8 w-full py-3 bg-[#0F172A] text-white rounded-xl font-bold text-xs uppercase tracking-widest">Withdraw via Airtel/MTN</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MODAL: ADMIN CREATES PROPOSAL */}
        <AnimatePresence>
          {showAdminForm && (
            <div className="fixed inset-0 z-[150] flex justify-end bg-[#0F172A]/40 backdrop-blur-sm">
              <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="w-full max-w-lg bg-white h-full shadow-2xl p-10 overflow-y-auto">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-3xl font-black font-poppins">Manual Entry</h2>
                  <button onClick={() => setShowAdminForm(false)} className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full text-slate-400">×</button>
                </div>
                <ContactForm />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- MODAL: CONVERSATION HISTORY & REPLY --- */}
        <AnimatePresence>
          {viewingMessage && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#0F172A]/60 backdrop-blur-md p-6">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white w-full max-w-xl rounded-[2.5rem] p-10 shadow-2xl"
              >
                <h3 className="text-xl font-black mb-8 border-b pb-4">Project Discussion: {viewingMessage.fullName}</h3>
                
                {/* CONVERSATION THREAD */}
                <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-black text-blue-600 uppercase mb-1 ml-2">Client Brief</span>
                    <div className="bg-slate-100 p-5 rounded-2xl rounded-tl-none text-slate-700 italic border border-slate-200 leading-relaxed w-[90%] text-sm">
                      "{viewingMessage.message}"
                    </div>
                  </div>

                  {viewingMessage.adminReply && (
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black text-[#3B82F6] uppercase mb-1 mr-2">Your Response</span>
                      <div className="bg-[#3B82F6] text-white p-5 rounded-2xl rounded-tr-none font-medium shadow-md w-[90%] text-sm">
                        {viewingMessage.adminReply}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="border-t pt-6">
                  <textarea 
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Draft official reply..." 
                    className="w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl mb-6 outline-none focus:border-blue-500 focus:bg-white transition-all font-medium text-sm"
                    rows="3"
                  ></textarea>
                  
                  <div className="flex gap-4">
                    <button onClick={handleSendReply} className="flex-1 py-4 bg-[#3B82F6] text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 uppercase text-[10px] tracking-widest hover:bg-[#2563EB] transition-all">
                      {viewingMessage.adminReply ? "Update & Save" : "Save & Send Reply"}
                    </button>
                    <button onClick={() => { setViewingMessage(null); setReplyText(""); }} className="px-8 py-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">Close</button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;