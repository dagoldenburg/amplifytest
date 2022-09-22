/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCarModel = /* GraphQL */ `
  query GetCarModel($id: ID!) {
    getCarModel(id: $id) {
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
export const listCarModels = /* GraphQL */ `
  query ListCarModels(
    $filter: ModelCarModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncCarModels = /* GraphQL */ `
  query SyncCarModels(
    $filter: ModelCarModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCarMake = /* GraphQL */ `
  query GetCarMake($id: ID!) {
    getCarMake(id: $id) {
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
export const listCarMakes = /* GraphQL */ `
  query ListCarMakes(
    $filter: ModelCarMakeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarMakes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        startyear
        CarModels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCarMakes = /* GraphQL */ `
  query SyncCarMakes(
    $filter: ModelCarMakeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarMakes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        startyear
        CarModels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
