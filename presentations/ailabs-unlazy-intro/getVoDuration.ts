import { ALL_FORMATS, Input, UrlSource } from "mediabunny";
import { staticFile } from "remotion";
import { VO_PATH } from "./meta";

/** Duration of reference VO in seconds (mediabunny). */
export async function getVoDurationSeconds(): Promise<number> {
  const input = new Input({
    formats: ALL_FORMATS,
    source: new UrlSource(staticFile(VO_PATH), {
      getRetryDelay: () => null,
    }),
  });
  return await input.computeDuration();
}
