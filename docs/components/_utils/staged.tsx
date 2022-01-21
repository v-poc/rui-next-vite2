import React from "react";
import type { PropsWithChildren, ReactElement, Ref, RefForwardingComponent } from "react";

type StageRender = () => ReactElement | StageRender | null;

type StageRenderRoot<P> = (props: PropsWithChildren<P>) => ReactElement | StageRender | null;

type StageRenderRootWithRef<P, R> = (props: PropsWithChildren<P>, ref: Ref<R>) => ReactElement | StageRender | null;

type StageProps = {
  stage: StageRender;
};

function Stage<P>(props: StageProps) {
  const next = props.stage();
  return handleNext(next);
};

function handleNext(next: ReactElement | StageRender | null) {
  let res = next;
  if (typeof next === "function") {
    // @ts-ignore
    res = <Stage stage={next} />;
  }
  return res;
};

export function staged<P = {}>(stage: StageRenderRoot<P>): React.FC<P>;

export function staged<P = {}, R = any>(stage: StageRenderRootWithRef<P, R>): RefForwardingComponent<R, P>;

export function staged<P = {}, R = any>(stage: StageRenderRootWithRef<P, R>) {
  return function Staged(props, ref) {
    const next = stage(props, ref);
    return handleNext(next);
  } as React.FC<P>;
};
