export default function Loading() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-200 mb-8 animate-pulse bg-gray-200 w-1/3 h-10 rounded-lg"></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-gray-100 rounded-2xl"></div>
                ))}
            </div>
        </div>
    );
}
