import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Notice from "@/components/Notice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";

import person from "@/img/300.jpg";

export default function Settings() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Notice />
      <GoTop />

      <div className="bg-white border-b">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl py-4 text-gray-900 font-mabrybold">Settings</h1>
        </div>
      </div>

      <main className="max-w-5xl mx-auto pt-10 pb-12 px-4 lg:pb-16 bg-gray-50">
        <div className="lg:grid lg:gap-x-5 lg:grid-cols-4">
          <div className="sm:px-6 lg:px-0 lg:col-span-1">
            <nav className="space-y-1" aria-label="Sidebar">
              <a
                href="#profile_settings_heading"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>{" "}
                <span className="truncate font-mabry">Profile</span>
              </a>
              <a
                href="#password_settings_heading"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  ></path>
                </svg>{" "}
                <span className="truncate font-mabry">Password</span>
              </a>
              <a
                href="#api_token_settings_heading"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  ></path>
                </svg>{" "}
                <span className="truncate">API Tokens</span>
              </a>
              <a
                href="#list_blocked_users"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>{" "}
                <span className="truncate font-mabry">Blocked Users</span>
              </a>

              <a
                href="#remove_account_heading"
                className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
              >
                <svg
                  className="text-gray-400 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  ></path>
                </svg>{" "}
                <span className="truncate font-mabry">Remove Account</span>
              </a>
            </nav>
          </div>
          <div className="mt-10 lg:mt-0 sm:px-6 lg:px-0 lg:col-span-3">
            <section aria-labelledby="profile_settings_heading">
              <form method="POST" action="https://laravel.io/settings">
                <input
                  type="hidden"
                  name="_token"
                  value="42EvnG3j8ROkZMIGR8iGXNaQK8ruAfBzkntHEs5D"
                  autocomplete="off"
                />{" "}
                <input type="hidden" name="_method" value="PUT" />
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h2
                        id="profile_settings_heading"
                        className="text-lg leading-6 font-medium font-mabry text-gray-900"
                      >
                        Profile
                      </h2>
                      <p className="mt-1 text-sm leading-5 text-gray-500 font-mabry">
                        Update your profile information.
                      </p>
                    </div>

                    <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
                      <div className="grow space-y-6">
                        <div className="space-y-1">
                          <label
                            for="name"
                            className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                          >
                            Name
                          </label>

                          <div>
                            <div className="relative">
                              <input
                                name="name"
                                type="text"
                                id="name"
                                value="zamroni"
                                // className="block w-full border-gray-300 rounded-md focus:border-lio-300 focus:ring focus:ring-lio-200 focus:ring-opacity-50 sm:text-sm sm:leading-5 mt-1"
                                className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                                required="required"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label
                            for="bio"
                            className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                          >
                            Bio
                          </label>

                          <div className="relative">
                            <textarea
                              name="bio"
                              id="bio"
                              rows="3"
                              // className="shadow-sm focus:border-lio-300 focus:ring focus:ring-lio-200 focus:ring-opacity-50 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              className="mt-1 w-full  bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                              maxlength="160"
                            ></textarea>
                          </div>

                          <span className="mt-2 text-sm text-gray-500 font-mabry">
                            The user bio is limited to 160 characters.
                          </span>
                        </div>
                      </div>

                      <div className="grow space-y-1 lg:grow-0 lg:shrink-0">
                        <p
                          className="block text-sm leading-5 font-medium text-gray-700 font-mabry"
                          aria-hidden="true"
                        >
                          Profile Image
                        </p>

                        <div className="flex items-center mt-2">
                          <div
                            className="shrink-0 inline-block overflow-hidden"
                            aria-hidden="true"
                          >
                            <Image
                              src={person}
                              className="border bg-gray-50 rounded-full h-32 w-32 mt-4"
                              alt=""
                            />

                            <span className="mt-4 inline-block text-sm text-gray-500 font-mabry">
                              Change your avatar for
                              <a
                                href="https://github.com/larazan"
                                className="text-green-700"
                              >
                                your GitHub profile
                              </a>
                              .
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12">
                        <label
                          for="email"
                          className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                        >
                          Email
                        </label>

                        <div>
                          <div className="relative">
                            <input
                              name="email"
                              type="email"
                              id="email"
                              value="forheron@gmail.com"
                              // className="block w-full border-gray-300 rounded-md focus:border-lio-300 focus:ring focus:ring-lio-200 focus:ring-opacity-50 sm:text-sm sm:leading-5 mt-1"
                              className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12 sm:col-span-6">
                        <label
                          for="username"
                          className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                        >
                          Username
                        </label>

                        <div>
                          <div className="relative">
                            <input
                              name="username"
                              type="text"
                              id="username"
                              value="larazan"
                              // className="block w-full border-gray-300 rounded-md focus:border-lio-300 focus:ring focus:ring-lio-200 focus:ring-opacity-50 sm:text-sm sm:leading-5 mt-1"
                              className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12 sm:col-span-6">
                        <label
                          for="website"
                          className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                        >
                          Website
                        </label>

                        <div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg
                                className="h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                ></path>
                              </svg>{" "}
                            </div>

                            <input
                              name="website"
                              type="text"
                              id="website"
                              value=""
                              // className="block w-full border-gray-300 rounded-md focus:border-lio-300 focus:ring focus:ring-lio-200 focus:ring-opacity-50 sm:text-sm sm:leading-5 mt-1 pl-10"
                              className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                              prefix-icon="heroicon-o-globe-alt"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12 sm:col-span-6">
                        <label
                          for="twitter"
                          className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                        >
                          Twitter
                        </label>

                        <div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg
                                className="h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  stroke-linecap="round"
                                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                                ></path>
                              </svg>{" "}
                            </div>

                            <input
                              name="twitter"
                              type="text"
                              id="twitter"
                              value=""
                              // className="block w-full border-gray-300 rounded-md focus:border-lio-300 focus:ring focus:ring-lio-200 focus:ring-opacity-50 sm:text-sm sm:leading-5 mt-1 pl-10 nav-search"
                              className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                              prefix-icon="heroicon-o-at-symbol"
                            />
                          </div>
                        </div>

                        <span className="mt-2 text-sm text-gray-500 font-mabry">
                          Enter your Twitter handle without the leading @ symbol
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <span className="inline-flex rounded-md shadow-sm">
                      <span className="inline-flex rounded-md shadow-sm">
                        <button
                          className="bg-[#18bc9c] border font-mabrybold border-transparent rounded py-2 px-4 inline-flex justify-center text-base text-white hover:bg-[#139179] font-medium"
                          type="submit"
                        >
                          Update Profile
                        </button>
                      </span>{" "}
                    </span>
                  </div>
                </div>
              </form>
            </section>
            <section aria-labelledby="password_settings_heading" className="mt-6">
              <form method="POST" action="https://laravel.io/settings/password">
                <input
                  type="hidden"
                  name="_token"
                  value="42EvnG3j8ROkZMIGR8iGXNaQK8ruAfBzkntHEs5D"
                  autocomplete="off"
                />{" "}
                <input type="hidden" name="_method" value="PUT" />
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h2
                        id="password_settings_heading"
                        className="text-lg leading-6 font-medium text-gray-900 font-mabry"
                      >
                        Password
                      </h2>
                      <p className="mt-1 text-sm leading-5 text-gray-500 font-mabry">
                        Update the password used for logging into your account.
                      </p>
                    </div>

                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12">
                        <label
                          for="current_password"
                          className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                        >
                          Current password
                        </label>

                        <div>
                          <div className="relative">
                            <input
                              name="current_password"
                              type="password"
                              id="current_password"
                              value=""
                              className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12">
                        <label
                          for="password"
                          className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                        >
                          Password
                        </label>

                        <div>
                          <div className="relative">
                            <input
                              name="password"
                              type="password"
                              id="password"
                              value=""
                              className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12">
                        <label
                          for="password_confirmation"
                          className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                        >
                          Password confirmation
                        </label>

                        <div>
                          <div className="relative">
                            <input
                              name="password_confirmation"
                              type="password"
                              id="password_confirmation"
                              value=""
                              className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                              required="required"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        className="bg-[#18bc9c] font-mabrybold border border-transparent rounded py-2 px-4 inline-flex justify-center text-base text-white hover:bg-[#139179] font-medium"
                        type="submit"
                      >
                        Update Password
                      </button>
                    </span>{" "}
                  </div>
                </div>
              </form>
            </section>
            <section aria-labelledby="api_token_settings_heading" className="mt-6">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h2
                      id="api_token_settings_heading"
                      className="text-lg leading-6 font-medium text-gray-900 font-mabry"
                    >
                      API Tokens
                    </h2>

                    <p className="mt-1 text-sm leading-5 text-gray-500 font-mabry">
                      Create API tokens to access your account over our REST
                      API.
                    </p>
                  </div>

                  <ul className="space-y-3"></ul>

                  <div>
                    <div className="col-span-12">
                      <label
                        for="token_name"
                        className="block text-sm font-medium leading-5 text-gray-700 font-mabry"
                      >
                        Token name
                      </label>

                      <div>
                        <div className="relative">
                          <input
                            name="token_name"
                            type="text"
                            id="token_name"
                            value=""
                            className="mt-1 w-full px-4 h-10 bg-white border border-gray-300 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-sm text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                            form="api_token_settings_form"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  method="POST"
                  action="https://laravel.io/settings/api-tokens"
                  id="api_token_settings_form"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="42EvnG3j8ROkZMIGR8iGXNaQK8ruAfBzkntHEs5D"
                    autocomplete="off"
                  />{" "}
                  <input type="hidden" name="_method" value="POST" />
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        className="bg-[#18bc9c] font-mabrybold border border-transparent rounded py-2 px-4 inline-flex justify-center text-base text-white hover:bg-[#139179] font-medium"
                        type="submit"
                      >
                        Generate New Token
                      </button>
                    </span>{" "}
                  </div>
                </form>
              </div>
            </section>
            <section className="mt-6">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <form
                  method="POST"
                  action="https://laravel.io/settings/notifications"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="42EvnG3j8ROkZMIGR8iGXNaQK8ruAfBzkntHEs5D"
                    autocomplete="off"
                  />{" "}
                  <input type="hidden" name="_method" value="POST" />
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900 font-mabry">
                        Notification settings
                      </h2>

                      <p className="mt-1 text-sm leading-5 text-gray-500 font-mabry">
                        Enable or disable specific notification types.
                      </p>
                    </div>

                    <ul className="space-y-3">
                      <li>
                        <div>
                          <div className="col-span-12">
                            <div>
                              <div className="flex items-center">
                                <input
                                  name="allowed_notifications[]"
                                  id="mention"
                                  type="checkbox"
                                  value="mention"
                                  className="h-4 w-4 text-lio-600 focus:ring-lio-500 border-gray-300 rounded"
                                  checked=""
                                />

                                <label
                                  for="mention"
                                  className="ml-2 block text-sm text-gray-900 font-mabry"
                                >
                                  Mentions
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className="col-span-12">
                            <div>
                              <div className="flex items-center">
                                <input
                                  name="allowed_notifications[]"
                                  id="reply"
                                  type="checkbox"
                                  value="reply"
                                  className="h-4 w-4 text-lio-600 focus:ring-lio-500 border-gray-300 rounded"
                                  checked=""
                                />

                                <label
                                  for="reply"
                                  className="ml-2 block text-sm text-gray-900 font-mabry"
                                >
                                  Replies
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        className="bg-[#18bc9c] font-mabrybold border border-transparent rounded py-2 px-4 inline-flex justify-center text-base text-white hover:bg-[#139179] font-medium"
                        type="submit"
                      >
                        Save notification settings
                      </button>
                    </span>{" "}
                  </div>
                </form>
              </div>
            </section>
            <section aria-labelledby="password_settings_heading" className="mt-6">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h2
                      id="list_blocked_users"
                      className="text-lg leading-6 font-medium text-gray-900 font-mabry"
                    >
                      Blocked Users
                    </h2>
                    <p className="mt-1 text-sm leading-5 text-gray-500 font-mabry">
                      The users below will not be able to mention you in their
                      forum threads or replies. You can block additional users
                      from their profile. Or you can unblock users below.
                    </p>
                  </div>

                  <ul className="space-y-4">
                    <p className="mt-1 text-sm leading-5 text-gray-500 font-mabry">
                      Currently, you've not blocked anyone.
                    </p>
                  </ul>
                </div>
              </div>
            </section>
            <section aria-labelledby="remove_account_heading" className="mt-6">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h2
                      id="remove_account_heading"
                      className="text-lg leading-6 font-medium text-red-500 uppercase font-mabry"
                    >
                      Danger Zone
                    </h2>
                    <p className="mt-1 text-sm leading-5 text-gray-500 font-mabry">
                      Please be aware that deleting your account will also
                      remove all of your data, including your threads and
                      replies. This cannot be undone.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <span className="inline-flex rounded-md shadow-sm">
                    <span className="inline-flex rounded-md shadow">
                      <button className="bg-white font-mabrybold border border-red-400 rounded py-2 px-4 inline-flex justify-center text-base text-red-500 hover:bg-red-50 font-medium">
                        Delete Account
                      </button>
                    </span>{" "}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
