'use client';
import { useCallback, useEffect, useState, MouseEventHandler } from 'react';

const getScrollBarWidth = () => {
  const isSSR = typeof window === 'undefined';
  if (isSSR) return 0;
  const hasScrollbar = document.body.scrollHeight > screen.height;
  if (hasScrollbar) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  }
  return 0;
};

export const Modal = () => {
  const isSSR = typeof window === 'undefined';
  const htmlTag = !isSSR && document.querySelector('html');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalAnimationDuration = 400;

  // Handle open
  const handleOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (htmlTag) {
      setModalIsOpen(true);
      htmlTag.classList.add('modal-is-open', 'modal-is-opening');
      setTimeout(() => {
        htmlTag.classList.remove('modal-is-opening');
      }, modalAnimationDuration);
    }
  };

  const close = useCallback(() => {
    if (htmlTag) {
      htmlTag.classList.add('modal-is-closing');
      setTimeout(() => {
        setModalIsOpen(false);
        htmlTag.classList.remove('modal-is-open', 'modal-is-closing');
      }, modalAnimationDuration);
    }
  }, [htmlTag]);

  // Handle close
  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();
      close();
    },
    [close],
  );

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (!modalIsOpen) return;
      if (event.key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [modalIsOpen, handleClose, close]);

  // Set scrollbar width on mount
  useEffect(() => {
    if (htmlTag) {
      const scrollBarWidth = getScrollBarWidth();
      htmlTag.style.setProperty('--pico-scrollbar-width', `${scrollBarWidth}px`);
      return () => {
        htmlTag.style.removeProperty('--pico-scrollbar-width');
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOverlay: MouseEventHandler<HTMLDialogElement> = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <>
      <section id="modal">
        <h2>Modal</h2>
        <button className="contrast" data-target="modal-example" onClick={handleOpen}>
          Launch demo modal
        </button>
      </section>
      <dialog onClick={handleClickOverlay} open={modalIsOpen}>
        <article>
          <header>
            <button aria-label="Close" rel="prev" onClick={handleClose}></button>
            <h3>Confirm your action!</h3>
          </header>
          <p>
            Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue finibus
            pellentesque. Nullam finibus risus non semper euismod.
          </p>
          <footer>
            <button className="secondary" onClick={handleClose}>
              Cancel
            </button>
            <button onClick={handleClose}>Confirm</button>
          </footer>
        </article>
      </dialog>
    </>
  );
};
