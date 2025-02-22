"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Editor } from "./editor/Editor";
import Header from "./Header";
import React from "react";

type Props = {
  roomId: string;
};

const CollaborativeRoom = ({ roomId }: Props) => {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="collaborative-room">
          <Header className="text-white">
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">share</p>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
