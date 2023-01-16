import React, { useEffect, useRef, useState } from 'react';

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        importedIconRef.current = (
          await import(`_assets/icons/${iconName}.svg`)
        ).ReactComponent; // svgr provides ReactComponent for given svg path
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    void importSvgIcon();
  }, [iconName]);

  return { error, loading, SvgIcon: importedIconRef.current };
}
