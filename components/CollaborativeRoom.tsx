"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import ActiveCollaborators from "./ActiveCollaborators";
import { Editor } from "./editor/Editor";
import Header from "./Header";
import React from "react";

const CollaborativeRoom = ({
  roomId,
  roomMetadata,
}: CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        <div className="collaborative-room">
          <Header className="text-white">
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">share</p>
            </div>
            <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
              <ActiveCollaborators />
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
