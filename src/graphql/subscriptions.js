/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCarModel = /* GraphQL */ `
  subscription OnCreateCarModel {
    onCreateCarModel {
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
export const onUpdateCarModel = /* GraphQL */ `
  subscription OnUpdateCarModel {
    onUpdateCarModel {
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
export const onDeleteCarModel = /* GraphQL */ `
  subscription OnDeleteCarModel {
    onDeleteCarModel {
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
export const onCreateCarMake = /* GraphQL */ `
  subscription OnCreateCarMake {
    onCreateCarMake {
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
export const onUpdateCarMake = /* GraphQL */ `
  subscription OnUpdateCarMake {
    onUpdateCarMake {
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
export const onDeleteCarMake = /* GraphQL */ `
  subscription OnDeleteCarMake {
    onDeleteCarMake {
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
