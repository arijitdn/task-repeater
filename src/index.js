// Copyright 2023 Arijit Debnath
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

async function repeatTask(task, n) {
  if (!task) return console.error("You need to provide a valid function");
  if (!n) return console.log("You need to provide a valid amound");

  if (typeof task !== "function") {
    return console.error("The provided task must be a function.");
  }
  if (typeof n !== "number") {
    return console.error("The provided amount must be a number.");
  }

  for (let i = 1; i <= n; i++) {
    await task();
  }
}

module.exports = { repeatTask };
