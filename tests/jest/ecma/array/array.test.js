describe('Array Built-in Object test', () => {
  test('simple sorting', () => {
    const array = [1, 3, 2];
    expect(array.sort()).toEqual([1, 2, 3]);

    const array2 = [3, 2, 4, 10, 9, 8];
    expect(array2.sort()).toEqual([10, 2, 3, 4, 8, 9]); // ?? 숫자인데 왜 10이 앞으로 오냐
    expect(array2.toSorted()).toEqual([10, 2, 3, 4, 8, 9]); // 이것도 마찬가지
    // 아무래도 sort()는 문자열로 변환해서 비교하는 것 같다.
  });

  test('sorting with compare function', () => {
    const array = [3, 2, 4, 10, 9, 8, 20, 300];
    // 오름차순 정렬
    expect(
      array.toSorted((a, b) => {
        return a - b;
      })
    ).toEqual([2, 3, 4, 8, 9, 10, 20, 300]); // 오름차순 정렬
    // 내림차순 정렬
    expect(
      array.toSorted((a, b) => {
        return b - a;
      })
    ).toEqual([300, 20, 10, 9, 8, 4, 3, 2]); // 내림차순 정렬
  });

  test('object array sorting', () => {
    const array = [
      {
        name: 'apple',
        createDt: '2024-05-15'
      },
      {
        name: 'banana',
        createDt: '2024-05-07'
      },
      {
        name: 'orange',
        createDt: '2024-06-09'
      }
    ];
    // 날짜로 내림차순 정렬
    expect(
      array.toSorted((a, b) => {
        return new Date(b.createDt) - new Date(a.createDt);
      })
    ).toEqual([
      {
        name: 'orange',
        createDt: '2024-06-09'
      },
      {
        name: 'apple',
        createDt: '2024-05-15'
      },
      {
        name: 'banana',
        createDt: '2024-05-07'
      }
    ]);
  });
});
