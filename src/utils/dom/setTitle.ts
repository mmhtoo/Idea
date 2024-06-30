import { onMounted } from 'vue'

/*
 * for setting document's title
 */
export function setTitle(title: string): void {
  if (!document) {
    return
  }
  // for preventing SSR
  onMounted(() => {
    document.title = title
  })
}
