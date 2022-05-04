import { runInspectServer } from '@effection/inspect-server';
import { main, spawn } from 'effection';

main(function*() {
  runInspectServer({ port: 9009 });

  yield spawn(function* One() {
    yield spawn(function* OneOnce() {
      yield;
    });
    yield spawn(function* OneTwo() {
      yield;
    });
    yield;
  });

  yield;
})
