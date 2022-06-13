const db = require("../lib/prisma");

module.exports.createStudent = async ({ firstname, lastname, campus }) => {
  return await db.student.create({
    data: { firstname, lastname, campus },
  });
};

module.exports.getStudents = () =>
  db.student.findMany({
    orderBy: {
      lastname: "asc",
    },
  });

module.exports.deleteOneStudent = (id) => {
  return db.student.delete({
    where: {
      id,
    },
  });
};
