declare module '@mailchimp/mailchimp_marketing' {
  interface Config {
    apiKey?: string
    accessToken?: string
    server?: string
  }

  interface MergeFields {
    [key: string]: string
  }

  interface AddListMemberBody {
    email_address: string
    status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending'
    merge_fields?: MergeFields
    tags?: string[]
  }

  interface Lists {
    addListMember(listId: string, body: AddListMemberBody): Promise<any>
  }

  interface Mailchimp {
    setConfig(config: Config): void
    lists: Lists
  }

  const mailchimp: Mailchimp
  export default mailchimp
}
