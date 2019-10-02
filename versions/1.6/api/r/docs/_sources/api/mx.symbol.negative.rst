

``mx.symbol.negative``
============================================

Description
----------------------

Numerical negative of the argument, element-wise.

The storage type of ``negative`` output depends upon the input storage type:

	- negative(default) = default
	- negative(row_sparse) = row_sparse
	- negative(csr) = csr

Usage
----------

.. code:: r

	mx.symbol.negative(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


