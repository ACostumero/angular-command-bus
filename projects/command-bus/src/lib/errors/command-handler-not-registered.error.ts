export class CommandHandlerNotRegistered implements Error {
  message: string = 'CommandInterface handler was not registered';
  name: string = 'COMMAND_HANDLER_NOT_REGISTERED';
}
