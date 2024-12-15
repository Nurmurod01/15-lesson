import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home({ contacts, setContacts }) {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-evenly py-8  w-[1200px] mx-auto">
        <div className="">
          <input
            className="px-5 rounded-xl"
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="fa fa-magnifying-glass px-2"></i>
        </div>

        <button className="bg-slate-500 px-5 font-lg text-2xl text-center  rounded-xl">
          <NavLink to="/create-contact">+</NavLink>
        </button>
      </div>
      <div>
        <table className="mx-auto w-[1200px]">
          <thead className="">
            <tr>
              <th className="w-[400px]">Name</th>
              <th className="w-[400px]">Phone</th>
              <th>Tools</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td className="flex justify-evenly">
                    <button
                      onClick={() =>
                        setContacts(contacts.filter((c) => c.id !== contact.id))
                      }
                      className="bg-red-500 px-5 rounded-lg h-[30px] font-medium"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                    <button className="bg-green-500 px-2 rounded-lg h-[30px] font-medium">
                      <NavLink
                        className={"px-8"}
                        to={`/edit-contact/${contact.id}`}
                      >
                        <i className="fa fa-pencil"></i>
                      </NavLink>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
