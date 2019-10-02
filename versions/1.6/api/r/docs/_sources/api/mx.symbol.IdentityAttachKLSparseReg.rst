

``mx.symbol.IdentityAttachKLSparseReg``
==============================================================================

Description
----------------------

IdentityAttachKLSparseReg:Apply a sparse regularization to the output a sigmoid activation function.

Usage
----------

.. code:: r

	mx.symbol.IdentityAttachKLSparseReg(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``sparseness.target``                  | float, optional, default=0.100000001.                      |
|                                        |                                                            |
|                                        | The sparseness target                                      |
+----------------------------------------+------------------------------------------------------------+
| ``penalty``                            | float, optional, default=0.00100000005.                    |
|                                        |                                                            |
|                                        | The tradeoff parameter for the sparseness penalty          |
+----------------------------------------+------------------------------------------------------------+
| ``momentum``                           | float, optional, default=0.899999976.                      |
|                                        |                                                            |
|                                        | The momentum for running average                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


