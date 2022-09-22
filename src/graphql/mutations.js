/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCarModel = /* GraphQL */ `
  mutation CreateCarModel(
    $input: CreateCarModelInput!
    $condition: ModelCarModelConditionInput
  ) {
    createCarModel(input: $input, condition: $condition) {
      id
      name
      activelysold
      carmakeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCarModel = /* GraphQL */ `
  mutation UpdateCarModel(
    $input: UpdateCarModelInput!
    $condition: ModelCarModelConditionInput
  ) {
    updateCarModel(input: $input, condition: $condition) {
      id
      name
      activelysold
      carmakeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCarModel = /* GraphQL */ `
  mutation DeleteCarModel(
    $input: DeleteCarModelInput!
    $condition: ModelCarModelConditionInput
  ) {
    deleteCarModel(input: $input, condition: $condition) {
      id
      name
      activelysold
      carmakeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCarMake = /* GraphQL */ `
  mutation CreateCarMake(
    $input: CreateCarMakeInput!
    $condition: ModelCarMakeConditionInput
  ) {
    createCarMake(input: $input, condition: $condition) {
      id
      name
      startyear
      CarModels {
        items {
          id
          name
          activelysold
          carmakeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCarMake = /* GraphQL */ `
  mutation UpdateCarMake(
    $input: UpdateCarMakeInput!
    $condition: ModelCarMakeConditionInput
  ) {
    updateCarMake(input: $input, condition: $condition) {
      id
      name
      startyear
      CarModels {
        items {
          id
          name
          activelysold
          carmakeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCarMake = /* GraphQL */ `
  mutation DeleteCarMake(
    $input: DeleteCarMakeInput!
    $condition: ModelCarMakeConditionInput
  ) {
    deleteCarMake(input: $input, condition: $condition) {
      id
      name
      startyear
      CarModels {
        items {
          id
          name
          activelysold
          carmakeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
