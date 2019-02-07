// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPage = `query GetPage($id: ID!) {
  getPage(id: $id) {
    id
    name
    messages {
      items {
        id
        symbol
        ja
        en
        zhCN
        ko
        fr
        tl
        en029
        enGB
        description
      }
      nextToken
    }
  }
}
`;
export const listPages = `query ListPages(
  $filter: ModelPageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      messages {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMessage = `query GetMessage($id: ID!) {
  getMessage(id: $id) {
    id
    symbol
    ja
    en
    zhCN
    ko
    fr
    tl
    en029
    enGB
    description
    page {
      id
      name
      messages {
        nextToken
      }
    }
  }
}
`;
export const listMessages = `query ListMessages(
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      symbol
      ja
      en
      zhCN
      ko
      fr
      tl
      en029
      enGB
      description
      page {
        id
        name
      }
    }
    nextToken
  }
}
`;
