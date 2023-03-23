import SmallCard from '../components/SmallCard';
import { useEffect, useState } from 'react';

const fetchUsers = async () => {
  const resp = await fetch('/api/GetUsers');
  if (resp.status !== 200) {
    throw new Error('request failed');
  }

  const data = await resp.json();
  return data;
};

const Home = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  // ユーザーリストを読みます。
  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error != null) {
    return (
      <div>
        <h1>エラーが発生しました</h1>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  if (users == null) {
    return (
      <div>
        <h1>ローディングしています…</h1>
      </div>
    );
  }

  return (
    <div className="home">
      <h1>User List</h1>
      <div className="card-grid">
        {users.map((user) => {
          return (
            <SmallCard
              key={user.username}
              icon={<img src={user.picture} />}
              title={user.nickname}
              slug={`/users/${user.username}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
