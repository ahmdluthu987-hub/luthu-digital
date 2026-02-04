import Link from "next/link";
import { ArrowRight, Mail, Briefcase, Calendar } from "lucide-react";

interface Lead {
    id: string;
    name: string;
    service: string;
    email: string;
    phone: string | null;
    created_at: string;
}

interface LeadsTableProps {
    leads: Lead[];
}

export default function LeadsTable({ leads }: LeadsTableProps) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-end mb-4 h-6">
                <h2 className="text-lg font-bold text-foreground">Recent Chatbot Leads</h2>
                <Link href="/admin/dashboard/leads" className="text-xs sm:text-sm font-bold text-primary hover:underline flex items-center gap-1">
                    View All <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
            </div>
            <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden w-full">
                {leads && leads.length > 0 ? (
                    <>
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50/50 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100">
                                        <th className="py-3 px-4 lg:py-4 lg:px-5">Lead</th>
                                        <th className="py-3 px-4 lg:py-4 lg:px-5">Service</th>
                                        <th className="py-3 px-4 lg:py-4 lg:px-5">Contact</th>
                                        <th className="py-3 px-4 lg:py-4 lg:px-5 text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {leads.map((lead) => (
                                        <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="py-3 px-4 lg:py-4 lg:px-5">
                                                <p className="font-bold text-sm text-foreground">{lead.name}</p>
                                                <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wider">Verified Lead</p>
                                            </td>
                                            <td className="py-3 px-4 lg:py-4 lg:px-5">
                                                <span className="px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase">
                                                    {lead.service || 'None'}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 lg:py-4 lg:px-5">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs text-foreground/70 flex items-center gap-2">
                                                        <Mail className="w-3 h-3 opacity-50" /> {lead.email}
                                                    </span>
                                                    {lead.phone && (
                                                        <span className="text-xs text-foreground/70 flex items-center gap-2">
                                                            <Briefcase className="w-3 h-3 opacity-50" /> {lead.phone}
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 lg:py-4 lg:px-5 text-right">
                                                <span className="text-xs text-gray-400 flex justify-end items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(lead.created_at).toLocaleDateString()}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Stacked Cards */}
                        <div className="md:hidden divide-y divide-gray-100">
                            {leads.map((lead) => (
                                <div key={lead.id} className="p-4 sm:p-5 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-bold text-sm text-foreground">{lead.name}</p>
                                            <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wider">Verified Lead</p>
                                        </div>
                                        <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-md uppercase self-start">
                                            {lead.service || 'None'}
                                        </span>
                                    </div>

                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2 text-xs text-foreground/70">
                                            <Mail className="w-3.5 h-3.5 opacity-50" />
                                            <span className="truncate">{lead.email}</span>
                                        </div>
                                        {lead.phone && (
                                            <div className="flex items-center gap-2 text-xs text-foreground/70">
                                                <Briefcase className="w-3.5 h-3.5 opacity-50" />
                                                <span>{lead.phone}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-2 border-t border-gray-50 flex justify-end items-center">
                                        <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(lead.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="p-10 flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                            <Briefcase className="w-5 h-5 text-gray-300" />
                        </div>
                        <p className="text-sm font-medium text-foreground">No chatbot leads yet</p>
                    </div>
                )}
            </div>
        </div>
    );
}
