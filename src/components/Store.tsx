import { For, createSignal } from 'solid-js'
import { createEffect } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

export function Store() {
  const [store, setStore] = createStore({
    userCount: 3,
    users: [
      {
        id: 0,
        username: 'felix909',
        location: 'England',
      },
      {
        id: 1,
        username: 'tracy634',
        location: 'Canada',
      },
      {
        id: 2,
        username: 'johny123',
        location: 'India',
      },
    ],
  })
  const [id, setId] = createSignal()
  const [username, setUsername] = createSignal('')
  const [location, setLocation] = createSignal('')

  const addUser = () => {
    setStore('users', store.users.length, {
      id: store.users.length,
      username: username(),
      location: location(),
    })
  }

  const updateUser = () => {
    setStore(
      'users',
      Number(id()),
      produce((user) => {
        user.username = username()
        user.location = location()
      }),
    )
  }

  const upsertUser = () => {
    if (id()) {
      updateUser()
    } else {
      addUser()
    }
    setId()
    setUsername('')
    setLocation('')
  }

  createEffect(() => {
    setStore('userCount', store.users.length)
  })

  return (
    <>
      <h1>Store</h1>

      <section>
        <h2>User List</h2>
        <input
          type="number"
          placeholder="ID"
          value={Number(id())}
          onInput={(e) => setId(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username()}
          onInput={(e) => setUsername(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location()}
          onInput={(e) => setLocation(e.currentTarget.value)}
        />
        <button type="button" onClick={upsertUser}>
          {id() ? 'Update' : 'Add'}
        </button>
        <p>User count: {store.userCount}</p>
        <For each={store.users}>
          {(user) => (
            <dl>
              <dt>ID</dt>
              <dd>{user.id}</dd>
              <dt>Username</dt>
              <dd>{user.username}</dd>
              <dt>Location</dt>
              <dd>{user.location}</dd>
            </dl>
          )}
        </For>
      </section>
    </>
  )
}
