import { Profiles } from './Profiles';

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 p-4">
      <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
        Random User Profiles
      </h2>

      <div className="flex flex-grow items-center justify-center">
        <Profiles />
      </div>
    </div>
  );
};
