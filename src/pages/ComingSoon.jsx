import { useNavigate } from 'react-router-dom';

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
        <p className="text-gray-600 mb-6">This case study is still under design.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}