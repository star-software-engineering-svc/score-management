import scoreReducer, {
  addRecord,
  deleteRecord,
} from './scoreSlice';

describe('score reducer', () => {
  const initialState = {
    data: []
  };
  it('should handle addRecord', () => {
    const actual = scoreReducer(initialState, addRecord({
      name: 'Darren', score: 50, classNo: 'A'
    }));
    expect(actual.data.length).toEqual(1);
  });

  it('should handle deleteRecord', () => {
    let actual = scoreReducer(initialState, addRecord({
      name: 'Darren', score: 50, classNo: 'A'
    }));
    actual = scoreReducer(actual, addRecord({
      name: 'Darren', score: 45, classNo: 'B'
    }));
    actual = scoreReducer(actual, deleteRecord(0));
    expect(actual.data.length).toEqual(1);
  });
});
