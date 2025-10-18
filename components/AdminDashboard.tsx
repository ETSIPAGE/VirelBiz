
import React, { useState, useEffect, useMemo } from 'react';
import { SearchIcon, DownloadIcon, RefreshIcon } from './icons/Icons';

type Submission = {
  [key: string]: any; 
  submissionId: string;
  companyName: string;
  founderName: string;
  directorEmail: string;
  founderPhone: string;
  country: string;
  industry: string;
  createdAt: string;
};

const industries = [
    "Information Technology & Services", "Healthcare & Pharmaceuticals", "Automotive", "Manufacturing & Industrial", "Consumer Goods & FMCG", "Fashion & Apparel", "Agriculture & Agribusiness", "Real Estate & Construction", "Financial Services", "Education", "Other"
];

const AdminDashboard: React.FC = () => {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Filters and Search
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [industryFilter, setIndustryFilter] = useState('');

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch('https://uanaab3sjf.execute-api.ap-south-1.amazonaws.com/Get/registrations');
                if (!response.ok) {
                    const errorDetails = await response.text();
                    console.error('API request failed with status:', response.status, 'Response body:', errorDetails);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                // The new API returns an array directly. The old API might have wrapped it in a `body` property.
                // This logic handles both cases.
                const parsedData = typeof data.body === 'string' ? JSON.parse(data.body) : data;
                
                if (Array.isArray(parsedData)) {
                    setSubmissions(parsedData.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
                } else {
                     console.error('API returned data but it was not an array:', parsedData);
                     throw new Error("Fetched data is not an array.");
                }

            } catch (e: any) {
                console.error("Failed to fetch submissions. Reason:", e.message, e);
                setError(`Failed to load data. The API might be down or returned an unexpected format. Please check the console for more details. (${e.message})`);
            } finally {
                setLoading(false);
            }
        };
        fetchSubmissions();
    }, []);

    const filteredSubmissions = useMemo(() => {
        return submissions
            .filter(sub => {
                if (dateFilter && sub.createdAt) {
                    return sub.createdAt.startsWith(dateFilter);
                }
                return true;
            })
            .filter(sub => {
                if (industryFilter) {
                    return sub.industry === industryFilter;
                }
                return true;
            })
            .filter(sub => {
                const search = searchTerm.toLowerCase();
                if (!search) return true;
                return (
                    sub.companyName?.toLowerCase().includes(search) ||
                    sub.founderName?.toLowerCase().includes(search) ||
                    sub.directorEmail?.toLowerCase().includes(search)
                );
            });
    }, [submissions, searchTerm, dateFilter, industryFilter]);

    const paginatedSubmissions = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredSubmissions.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredSubmissions, currentPage]);

    const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);

    const handleResetFilters = () => {
        setSearchTerm('');
        setDateFilter('');
        setIndustryFilter('');
        setCurrentPage(1);
    };

    const handleDownloadCSV = () => {
        if (filteredSubmissions.length === 0) {
            alert("No data to download.");
            return;
        }

        const headers = Object.keys(filteredSubmissions[0]);
        const csvContent = [
            headers.join(','),
            ...filteredSubmissions.map(row => 
                headers.map(header => JSON.stringify(row[header])).join(',')
            )
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.href) {
            URL.revokeObjectURL(link.href);
        }
        link.href = URL.createObjectURL(blob);
        link.download = `virelbiz_submissions_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto bg-yellow-50 p-8 rounded-2xl shadow-2xl border-2 border-amber-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-stone-800">Registration Submissions</h1>
                        <p className="text-stone-600 mt-2">Browse, filter, and export company registrations.</p>
                    </div>
                    <button onClick={handleDownloadCSV} className="mt-4 sm:mt-0 flex items-center bg-amber-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors shadow-md">
                        <DownloadIcon className="h-5 w-5 mr-2" />
                        Download as Excel
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                    <div className="md:col-span-2 relative">
                         <SearchIcon className="h-5 w-5 absolute top-1/2 left-3 -translate-y-1/2 text-stone-400" />
                        <input type="text" placeholder="Search by company, founder, or email..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-white border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <input type="date" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="w-full px-4 py-2 bg-white border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"/>
                    <select value={industryFilter} onChange={e => setIndustryFilter(e.target.value)} className="w-full px-4 py-2 bg-white border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                        <option value="">All Industries</option>
                        {industries.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                     <div className="md:col-span-4 flex justify-end">
                        <button onClick={handleResetFilters} className="flex items-center text-sm text-stone-600 hover:text-amber-700 font-semibold">
                            <RefreshIcon className="h-4 w-4 mr-1"/>
                            Reset Filters
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto custom-scrollbar rounded-lg border border-amber-200">
                    <table className="w-full text-sm text-left text-stone-700">
                        <thead className="text-xs text-stone-800 uppercase bg-yellow-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">Company Name</th>
                                <th scope="col" className="px-6 py-3">Founder</th>
                                <th scope="col" className="px-6 py-3">Industry</th>
                                <th scope="col" className="px-6 py-3">Country</th>
                                <th scope="col" className="px-6 py-3">Submitted On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr><td colSpan={5} className="text-center p-8">Loading submissions...</td></tr>
                            ) : error ? (
                                <tr><td colSpan={5} className="text-center p-8 text-red-600 bg-red-50">{error}</td></tr>
                            ) : paginatedSubmissions.length > 0 ? (
                                paginatedSubmissions.map((sub) => (
                                    <tr key={sub.submissionId} className="bg-white border-b border-yellow-200 hover:bg-yellow-100/50">
                                        <td className="px-6 py-4 font-bold text-stone-800">{sub.companyName}</td>
                                        <td className="px-6 py-4">
                                            <div>{sub.founderName}</div>
                                            <div className="text-xs text-stone-500">{sub.directorEmail}</div>
                                        </td>
                                        <td className="px-6 py-4">{sub.industry}</td>
                                        <td className="px-6 py-4">{sub.country}</td>
                                        <td className="px-6 py-4">{sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : 'N/A'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr><td colSpan={5} className="text-center p-8">No submissions found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-sm text-stone-600">
                            Showing <span className="font-semibold">{Math.min(1 + (currentPage-1)*itemsPerPage, filteredSubmissions.length)}</span> to <span className="font-semibold">{Math.min(currentPage*itemsPerPage, filteredSubmissions.length)}</span> of <span className="font-semibold">{filteredSubmissions.length}</span> results
                        </span>
                        <div className="flex items-center space-x-2">
                            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1 text-sm border border-yellow-300 rounded-md hover:bg-yellow-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                Previous
                            </button>
                            <span className="text-sm font-semibold p-2">Page {currentPage} of {totalPages}</span>
                            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1 text-sm border border-yellow-300 rounded-md hover:bg-yellow-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;