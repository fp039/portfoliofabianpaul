/**
 * Fügt den Base-URL-Pfad zu Asset-Pfaden hinzu
 * @param path Der relative Pfad zum Asset
 * @returns Der vollständige Pfad inkl. Base-URL
 */
export function getAssetPath(path: string): string {
  // Entferne führenden Slash, falls vorhanden
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Füge den Pfad direkt hinzu, ohne BASE_URL
  return `/${cleanPath}`;
}

/**
 * Fügt den Base-URL-Pfad zu Routing-Pfaden hinzu
 * @param path Der relative Routing-Pfad
 * @returns Der vollständige Pfad inkl. Base-URL
 */
export function getRoutePath(path: string): string {
  // Wenn der Pfad mit einem Slash beginnt, entferne ihn
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Wenn der Pfad leer ist (Home-Route), gib nur die BASE_URL zurück
  return cleanPath === '' ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/${cleanPath}`;
} 