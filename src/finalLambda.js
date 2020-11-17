
async function handler(event) {

  event.Records.map(record => {
    console.log(record);
    console.log(JSON.parse(record.body).message);
  });

  return { statusCode: 200 };
};

module.exports = { handler };
