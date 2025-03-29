import { useEffect, useState } from 'react';
import { from } from 'rxjs';

type User = {
  email: string;
  id: string;
  imageUrl: string;
  location: string;
  name: string;
  phoneNumber: string;
};

type UserResponse = {
  email: string;
  id: { name: string; value: string };
  name: { first: string; last: string; title: string };
  location: { country: string };
  picture: { large: string };
  phone: string;
};

const generateProfile = (users: Array<UserResponse>): Array<User> => {
  return users.map((user) => {
    return {
      id: user.id.value,
      email: user.email,
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      phoneNumber: user.phone,
      location: user.location.country,
      imageUrl: user.picture.large,
    };
  });
};

const fetchRandomUsers = (page: number, results: number) => {
  const url = `https://randomuser.me/api/?results=${results}&page=${page}&seed=abc`;
  return from(fetch(url).then((res) => res.json()));
};

export const useProfiles = (page: number, results: number) => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const subscription = fetchRandomUsers(page, results).subscribe((data) => {
      setUsers(generateProfile(data.results));
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [page, results]);

  return { users, loading };
};
