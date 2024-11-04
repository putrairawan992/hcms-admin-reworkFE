export default {};

export const ShareIcon = ({ style }) => {
  return (
    <svg
      style={style}
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.2502 2.77367C8.25014 2.33375 8.40478 1.90781 8.68705 1.57038C8.96932 1.23295 9.36125 1.00552 9.79427 0.927876C10.2273 0.850231 10.6738 0.927318 11.0557 1.14565C11.4377 1.36398 11.7307 1.70965 11.8835 2.12219C12.0363 2.53473 12.0391 2.98786 11.8916 3.4023C11.744 3.81675 11.4555 4.16611 11.0764 4.38928C10.6972 4.61245 10.2517 4.6952 9.81774 4.62306C9.38377 4.55092 8.98898 4.32849 8.70245 3.99467L3.66395 6.33467C3.77978 6.70175 3.77978 7.09559 3.66395 7.46267L8.70245 9.80267C9.00533 9.45042 9.4282 9.22315 9.88909 9.16491C10.35 9.10667 10.8161 9.22161 11.1971 9.48744C11.5781 9.75328 11.8468 10.1511 11.9512 10.6038C12.0556 11.0564 11.9882 11.5318 11.7621 11.9376C11.5361 12.3434 11.1674 12.6509 10.7275 12.8004C10.2877 12.9499 9.80797 12.9308 9.38141 12.7467C8.95485 12.5627 8.6118 12.2269 8.41873 11.8043C8.22567 11.3818 8.19635 10.9026 8.33645 10.4597L3.29795 8.11967C3.04853 8.41035 2.71606 8.61767 2.34528 8.71374C1.9745 8.80981 1.5832 8.79002 1.224 8.65703C0.864807 8.52405 0.554956 8.28425 0.336129 7.96989C0.117303 7.65553 0 7.28169 0 6.89867C0 6.51565 0.117303 6.14182 0.336129 5.82746C0.554956 5.5131 0.864807 5.2733 1.224 5.14031C1.5832 5.00733 1.9745 4.98754 2.34528 5.08361C2.71606 5.17968 3.04853 5.387 3.29795 5.67767L8.33645 3.33767C8.2791 3.15517 8.25001 2.96497 8.2502 2.77367Z"
        fill="#AE445A"
      />
    </svg>
  );
};

export const RejectIcon = ({ style, onClick }) => {
  return (
    <svg
      onClick={onClick}
      style={style}
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3L2 11"
        stroke="#AE445A"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 3L10 11"
        stroke="#AE445A"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ApproveIcon = ({ style, onClick }) => {
  return (
    <svg
      onClick={onClick}
      style={style}
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 1.89844L5.0625 10.8984L1 6.80753"
        stroke="#AE445A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CalenderIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.75 3.50065C1.75 2.85632 2.27233 2.33398 2.91667 2.33398H11.0833C11.7277 2.33398 12.25 2.85632 12.25 3.50065V11.6673C12.25 12.3116 11.7277 12.834 11.0833 12.834H2.91667C2.27233 12.834 1.75 12.3116 1.75 11.6673V3.50065Z"
        stroke="#AE445A"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.3335 1.16602V3.49935"
        stroke="#AE445A"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.6665 1.16602V3.49935"
        stroke="#AE445A"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.75 5.83398H12.25"
        stroke="#AE445A"
        stroke-width="1.16667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
