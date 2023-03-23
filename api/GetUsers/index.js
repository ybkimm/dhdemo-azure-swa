async function getUsers() {
  // データベース接続をシミュレーションするために0.3秒待ちます。
  await new Promise((resolve) => setTimeout(resolve, 300));

  return [
    {
      username: 'kim',
      nickname: 'キム',
      picture: '/images/profile/user1.jpg',
    },
    {
      username: 'hoge',
      nickname: 'ほげ',
      picture: '/images/profile/user2.jpg',
    },
  ];
}

module.exports = async function (context, req) {
  const users = await getUsers();

  context.res = {
    body: users,
  };
};
