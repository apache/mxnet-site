

``mx.symbol.gamma``
======================================

Description
----------------------

Returns the gamma function (extension of the factorial function \
to the reals), computed element-wise on the input array.

The storage type of ``gamma`` output is always dense

Usage
----------

.. code:: r

	mx.symbol.gamma(...)

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


