const student = { id : 12, name : 'razob',clssRoll : 29,subject : 'Computer-scince & Engineering',
    address :{home : 'doamr',destric : 'Nilphamari'},
    word :{company : 'xyz',address : 'xyz', mploy :{man : 15,woman : 2}},
};

const {man,woman} =student.word.mploy;
const {destric} =student.address;
// console.log(destric,man,nam);
console.log(student?.word?.mploy?.hah?.address);
