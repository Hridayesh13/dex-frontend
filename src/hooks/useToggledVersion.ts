import useParsedQueryString from './useParsedQueryString'

export enum Version {
  v2 = 'V2',
}

export const DEFAULT_VERSION: Version = Version.v2

export default function useToggledVersion(): Version {
  const { use } = useParsedQueryString()
  if (typeof use !== 'string') {
    return DEFAULT_VERSION
  }
  switch (use.toLowerCase()) {
    case 'v2':
      return Version.v2
    default:
      return Version.v2
  }
}
