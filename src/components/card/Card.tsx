type Props = {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
  phoneNumber: string;
  location: string;
};

export const Card = ({
  id,
  email,
  name,
  imageUrl,
  phoneNumber,
  location,
}: Props) => {
  return (
    <div key={id} className="w-60 rounded bg-white p-4 shadow-lg">
      <img
        className="mx-auto h-24 w-24 rounded-full"
        src={imageUrl}
        alt={name}
      />

      <h3 className="mt-10 text-center text-lg font-semibold text-gray-800">
        {name}
      </h3>

      <p className="text-center text-sm text-gray-500">{email}</p>

      <p className="text-center text-sm text-gray-500">{phoneNumber}</p>

      <p className="text-center text-sm text-gray-500">{location}</p>
    </div>
  );
};
