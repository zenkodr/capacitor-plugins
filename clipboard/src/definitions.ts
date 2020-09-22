declare module '@capacitor/core' {
  interface PluginRegistry {
    Clipboard: ClipboardPlugin;
  }
}

export interface ClipboardPlugin {
  /**
   * Write a value to the clipboard (the "copy" action)
   *
   * @since 1.0.0
   */
  write(options: ClipboardWriteOptions): Promise<void>;

  /**
   * Read a value from the clipboard (the "paste" action)
   *
   * @since 1.0.0
   */
  read(): Promise<ClipboardReadResult>;
}

/**
 * Represents the data to be written to the clipboard.
 *
 * @since 1.0.0
 */
export interface ClipboardWriteOptions {
  /**
   * Text value to copy.
   *
   * @since 1.0.0
   */
  string?: string;

  /**
   * Image in [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) format to copy.
   *
   * @since 1.0.0
   */
  image?: string;

  /**
   * URL string to copy.
   *
   * @since 1.0.0
   */
  url?: string;

  /**
   * User visible label to accompany the copied data (Android Only).
   *
   * @since 1.0.0
   */
  label?: string;
}

/**
 * Represents the data read from the clipboard.
 *
 * @since 1.0.0
 */
export interface ClipboardReadResult {
  /**
   * Data read from the clipboard.
   *
   * @since 1.0.0
   */
  value: string;

  /**
   * Type of data in the clipboard.
   *
   * @since 1.0.0
   */
  type: string;
}
