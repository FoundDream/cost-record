class Logger {
  private static formatMessage(
    message: string,
    additionalInfo?: unknown
  ): string {
    const timestamp = new Date().toISOString();
    let formattedMessage = `[${timestamp}] ${message}`;
    if (additionalInfo) {
      formattedMessage += ` - ${JSON.stringify(additionalInfo)}`;
    }
    return formattedMessage;
  }

  static log(message: string, additionalInfo?: unknown) {
    console.log(this.formatMessage(message, additionalInfo));
  }

  static error(message: string, additionalInfo?: unknown) {
    console.error(this.formatMessage(message, additionalInfo));
  }
}

export default Logger;
