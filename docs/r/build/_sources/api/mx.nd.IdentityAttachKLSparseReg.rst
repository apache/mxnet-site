.. raw:: html



``mx.nd.IdentityAttachKLSparseReg``
======================================================================

Description
----------------------

Apply a sparse regularization to the output a sigmoid activation function.


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``sparseness.target``                  | float, optional, default=0.1.                              |
|                                        |                                                            |
|                                        | The sparseness target                                      |
+----------------------------------------+------------------------------------------------------------+
| ``penalty``                            | float, optional, default=0.001.                            |
|                                        |                                                            |
|                                        | The tradeoff parameter for the sparseness penalty          |
+----------------------------------------+------------------------------------------------------------+
| ``momentum``                           | float, optional, default=0.9.                              |
|                                        |                                                            |
|                                        | The momentum for running average                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray



.. disqus::
   :disqus_identifier: mx.nd.IdentityAttachKLSparseReg
