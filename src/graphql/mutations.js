// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPage = `mutation CreatePage($input: CreatePageInput!) {
  createPage(input: $input) {
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
export const updatePage = `mutation UpdatePage($input: UpdatePageInput!) {
  updatePage(input: $input) {
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
export const deletePage = `mutation DeletePage($input: DeletePageInput!) {
  deletePage(input: $input) {
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
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
