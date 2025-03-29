import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { Card } from './card';
import { useProfiles } from '../hooks/useProfiles';

const DEFAULT_PAGE = 1;
const DEFAULT_RESULTS = 3;

export const Profiles = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [results, setResults] = useState(DEFAULT_RESULTS);
  const { users, loading } = useProfiles(page, results);

  if (loading) {
    return <p className="text-lg font-semibold text-gray-600">Loading ...</p>;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative flex items-center">
        <button
          className={`rounded-full p-2 ${
            page === 1
              ? 'cursor-not-allowed bg-gray-300'
              : 'cursor-pointer bg-gray-200 hover:bg-gray-300'
          }`}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
        >
          <ChevronLeft
            size={24}
            className={page === 1 ? 'text-gray-400' : 'text-black'}
          />
        </button>

        <div className="flex space-x-4 overflow-x-auto px-10 py-4">
          {users.map((user) => (
            <Card
              id={user.email}
              email={user.email}
              name={user.name}
              imageUrl={user.imageUrl}
              phoneNumber={user.phoneNumber}
              location={user.location}
            />
          ))}
        </div>

        <button
          className="cursor-pointer rounded-full bg-gray-200 p-2 hover:bg-gray-300"
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {[1, 3, 5, 10].map((num) => (
          <button
            key={num}
            onClick={() => setResults(num)}
            className={`cursor-pointer rounded-lg px-3 py-1 ${
              results === num
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {num} {num === 1 ? 'Profile' : 'Profiles'}
          </button>
        ))}
      </div>
    </div>
  );
};
