import defaultSettings from '@/settings'

const title = defaultSettings.title || '网页信息管理'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
